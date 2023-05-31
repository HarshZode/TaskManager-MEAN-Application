pipeline {
    agent any
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