"""empty message

Revision ID: 2ecdb11dacbd
Revises: 
Create Date: 2020-06-12 15:24:11.570978

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2ecdb11dacbd'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('survey',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('question', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('team',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=128), nullable=True),
    sa.Column('name', sa.Text(), nullable=True),
    sa.Column('password_hash', sa.String(length=256), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.create_index(batch_op.f('ix_user_email'), ['email'], unique=True)

    op.create_table('athlete',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('team_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['user.id'], ),
    sa.ForeignKeyConstraint(['team_id'], ['team.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('coach',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('survey_options',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('survey_id', sa.Integer(), nullable=False),
    sa.Column('option', sa.Text(), nullable=False),
    sa.Column('score', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['survey_id'], ['survey.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('survey_answers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('choice_id', sa.Integer(), nullable=False),
    sa.Column('student', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['choice_id'], ['survey_options.id'], ),
    sa.ForeignKeyConstraint(['student'], ['athlete.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('team_association_table',
    sa.Column('coach_id', sa.Integer(), nullable=True),
    sa.Column('team_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['coach_id'], ['coach.id'], ),
    sa.ForeignKeyConstraint(['team_id'], ['team.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('team_association_table')
    op.drop_table('survey_answers')
    op.drop_table('survey_options')
    op.drop_table('coach')
    op.drop_table('athlete')
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_index(batch_op.f('ix_user_email'))

    op.drop_table('user')
    op.drop_table('team')
    op.drop_table('survey')
    # ### end Alembic commands ###