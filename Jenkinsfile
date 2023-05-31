pipeline {
    agent { 
        node {
            label 'docker-agent-alpine'
            }
      }
    stages {
        stage('Build Frontend') {
            steps {
                echo "Building.."
                sh '''
                cd frontend
                npm install
                '''
            }
        }
        stage('Build Backend') {
            steps {
                echo "Building.."
                sh '''
                cd backend
                npm install
                '''
            }
        }
        stage('Test frontend') {
            steps {
                echo "Testing.."
                sh '''
                cd frontend
                npm test
                '''
            }
        }
        stage('Test backend') {
            steps {
                echo "Testing.."
                sh '''
                echo "doing test stuff.."
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                echo "doing delivery stuff.."
                '''
            }
        }
    }
}