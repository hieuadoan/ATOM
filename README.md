# ATOM: Automated Tools for Optimizing Materials

ATOM is a platform for accelerating materials discovery through AI, ML, and quantum simulations.

## Key Features
- **Agentic AI**: Automates decision-making for data exploration, model selection, and workflow optimization.
- **LLM Integration**: Provides contextual explanations for datasets, ML results, and simulation outputs.
- **Core Tools**:
  - Data upload and exploration.
  - Machine learning model training and evaluation.
  - Integration with first-principles simulations.

ATOM/
├── README.md                # Project overview and instructions
├── LICENSE                  # Project license
├── .gitignore               # Files to ignore in Git
├── requirements.txt         # Python dependencies
├── app/                     # Backend folder
│   ├── main.py              # Flask app entry point
├── frontend/                # React frontend folder
│   ├── src/
│   │   └── App.js           # Main React component
└── tests/                   # Test folder (unit tests for backend and frontend)

## Setup Instructions
### Backend
1. Install Python dependencies:
```bash
pip install -r requirements.txt
```
2. Run the Flask server:
```python
python app/main.py
```
### Frontend
1. Navigate to the 'frontend' directory and start the React app:
```npm start```

## TODOs
- [ ] Add database schema
- [ ] Integrate machine learning pipeline
- [ ] Add simulation workflows
