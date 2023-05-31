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
                echo "Testing of frontend completed"
            }
        }
        stage('Testing Backend') {
            steps {
                echo "Testing of frontend completed"
            }
        }
        stage('Final Stage') {
            steps {
                echo "App ready to deploy"
            }
        }
        
    }
}