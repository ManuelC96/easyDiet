"""empty message

Revision ID: dcc7a5441aa9
Revises: 
Create Date: 2025-01-22 09:35:01.496128

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'dcc7a5441aa9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('diet_plan',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('total_calories', sa.Integer(), nullable=False),
    sa.Column('carbs', sa.Float(), nullable=False),
    sa.Column('proteins', sa.Float(), nullable=False),
    sa.Column('fats', sa.Float(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('food_item',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('category', sa.String(length=255), nullable=False),
    sa.Column('diet_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['diet_id'], ['diet_plan.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('food_category')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('food_category',
    sa.Column('id', mysql.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('category', mysql.VARCHAR(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    mysql_collate='utf8mb4_0900_ai_ci',
    mysql_default_charset='utf8mb4',
    mysql_engine='InnoDB'
    )
    op.drop_table('food_item')
    op.drop_table('diet_plan')
    # ### end Alembic commands ###
