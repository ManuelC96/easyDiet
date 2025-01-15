# easyDiet app 
---
## Description
>The app is responsible for managing a person's diet, with the ability to create diet plans that include the following fields: Total Calories, Carbohydrates, Proteins, and Fats. Additionally, each category contains a list of foods.
## Architecture
>  Frontend: Angular

    ``
    

    ``

> Backend Python Flask


    # config.py
    class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:password@db/diet_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
#
    # model.py
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
#
    # app.py
    from flask import Flask, jsonify, request
    from flask_cors import CORS
    from models import db, DietPlan, FoodItem
    from config import Config

    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)
    db.init_app(app)

    @app.route('/diet-plans', methods=['GET'])
    def get_diet_plans():
        plans = DietPlan.query.all()
        return jsonify([{
            'id': plan.id,
            'name': plan.name,
            'total_calories': plan.total_calories,
            'carbs': plan.carbs,
            'proteins': plan.proteins,
            'fats': plan.fats,
            'foods': [{'id': food.id, 'name': food.name, 'category': food.category} for food in plan.foods]
        } for plan in plans])

    @app.route('/diet-plans', methods=['POST'])
    def create_diet_plan():
        data = request.json
        plan = DietPlan(
            name=data['name'],
            total_calories=data['total_calories'],
            carbs=data['carbs'],
            proteins=data['proteins'],
            fats=data['fats']
        )
        db.session.add(plan)
        db.session.commit()
        return jsonify({'message': 'Diet plan created!'})

    @app.route('/food-items', methods=['POST'])
    def add_food_item():
        data = request.json
        food = FoodItem(
            name=data['name'],
            category=data['category'],
            diet_id=data['diet_id']
        )
        db.session.add(food)
        db.session.commit()
        return jsonify({'message': 'Food item added!'})

    if __name__ == '__main__':
        with app.app_context():
            db.create_all()
        app.run(host='0.0.0.0', port=5000)


    
    

>  DatabaseMySQL

    ``
    
    ``


