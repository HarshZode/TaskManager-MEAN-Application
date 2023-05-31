pipeline {
    agent {
        node{
        label 'docker-agent-alpine-nodejs'
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
        stage('Testing Frontend') {
            steps {
                echo "Testing.."
                sh '''
                cd frontend
                npm test
                '''
            }
        }
        stage('Testing Backend') {
            steps {
                echo "Testing.."
                sh '''
                cd backend
                npm test
                '''
            }
        }
        stage('Final Stage') {
            steps {
                echo "App ready to deploy"
            }
        }
        
    }
}