from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class DietPlan(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    total_calories = db.Column(db.Integer, nullable=False)
    carbs = db.Column(db.Float, nullable=False)
    proteins = db.Column(db.Float, nullable=False)
    fats = db.Column(db.Float, nullable=False)

class FoodItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(255), nullable=False)  # e.g., 'Carbs', 'Proteins', 'Fats'
    diet_id = db.Column(db.Integer, db.ForeignKey('diet_plan.id'), nullable=False)
    diet = db.relationship('DietPlan', backref=db.backref('foods', lazy=True))