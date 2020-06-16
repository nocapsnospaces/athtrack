from functools import wraps

from flask import request

class InfoMixin:
    _info_fields = []  # Override this to set the default fields
    def info(self, fields=None):
        return self._info_simple(fields=fields)
    
    def _info_simple(self, fields=None):
        if fields is None:
            fields = self._info_fields
        i = {}
        for a in fields:
            try:
                v = getattr(self, a)
                i[a] = v
            except AttributeError:
                continue
        return i
    
    def _info_complex(self, fields=None):
        if fields is None:
            fields = self._simple_fields + self._complex_fields
        s = []
        for f in self._simple_fields:
            if f in fields:
                s.append(f)
        i = self._info_simple(fields=s)
        for f in self._complex_fields:
            if f in fields:
                i[f] = [a.info(fields=['id']) for a in getattr(self, f)]
        return i

def info_route(default_fields=[]):
    def prep_fields(default_fields):
        r_fields = set(request.args.getlist('fields', None))
        fields = set(default_fields)
        if len(r_fields) > 0:
            fields = r_fields.union(default_fields)
        else:
            fields = default_fields
        if len(fields) == 0:
            fields = None
        return fields

    def info_decorator(func):
        @wraps(func)
        def info_wrapper(*args, **kwargs):
            return func(prep_fields(default_fields), *args, **kwargs)
        return info_wrapper
    return info_decorator