from flask import request

class InfoMixin:
    _info_fields = []  # Override this to set the default fields
    def info(self, fields=None):
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
    
    @staticmethod
    def info_route(fields=[]):
        def info_decorator(func):
            @wraps(func)
            def info_wrapper(*args, **kwargs):
                r_fields = request.args.getlist('fields', [])
                fields += r_fields
                if len(fields) == 0:
                    fields = None
                kwargs.update(fields=fields)
                return func(*args, **kwargs)
            return info_wrapper
        return info_decorator