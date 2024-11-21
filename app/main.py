"""
main.py
Flask API entry point for the ATOM platform.

This script sets up the backend server for the ATOM project and defines basic routes.
"""

from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    """
    Home endpoint to test the server.

    Returns:
        dict: A welcome message highlighting ATOM's capabilities.
    """
    return jsonify({
        "message": "Welcome to ATOM API!",
        "description": "ATOM leverages Agentic AI and LLMs to optimize materials discovery workflows."
    })

if __name__ == '__main__':
    app.run(debug=True)
