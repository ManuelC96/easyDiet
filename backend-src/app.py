from flask import Flask, jsonify, request
from flask_cors import CORS
from models import db, DietPlan, FoodItem
from config import Config
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
db.init_app(app)
migrate = Migrate(app, db)


@app.route('/diet-plans', methods=['GET'])
def get_diet_plans():
    plans = DietPlan.query.all()
    if plans:
        # restituire i piani alimentari come JSON
        return jsonify([{
            'id': plan.id,
            'name': plan.name,
            'total_calories': plan.total_calories,
            'carbs': plan.carbs,
            'proteins': plan.proteins,
            'fats': plan.fats,
        } for plan in plans])
    # in caso di errore, restituire un messaggio di errore e un codice di stato 404
    return jsonify({'message': 'Diet plans not found'}), 404

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

@app.route('/diet-plans/<int:plan_id>', methods=['DELETE'])
def delete_diet_plan(plan_id):
    plan = DietPlan.query.get(plan_id)
    if not plan:
        return jsonify({'message': 'Diet plan not found'}), 404
    
    db.session.delete(plan)
    db.session.commit()
    return jsonify({'message': 'Diet plan deleted!'})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=5000)