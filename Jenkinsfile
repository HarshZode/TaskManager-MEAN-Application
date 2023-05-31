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
        
    }
}