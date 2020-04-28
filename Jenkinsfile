pipeline {

    agent any
    environment {
        NEW_VERSION = '1.3.0'
        ECR_CREDENTIALS = credentials('AWS ECR')
    }

    stages {

        stage("build") {

            steps {
                echo 'building the risc client...'
                echo "bulding version ${NEW_VERSION}"

            }

        }

       stage("test") {

            steps {
                echo 'testing the risc client...'
                
            }

        }

       stage("deploy") {

            steps {
                echo 'deploying the risc client...'
                echo "deploying with ${ECR_CREDENTIALS}"
                
            }

        }
    }
    post {
        always {
            echo 'do something after the pipleine has completed'

        }
        failure {
            echo 'do  something after the pipleline has failed'

        }
    }
}