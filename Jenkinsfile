pipeline {

    agent any
    environment {
        NEW_VERSION = '1.0.0'
    }

    stages {

        stage("build") {

            steps {
                echo 'building the risc client...'
                echo "bulding version ${NEW_VERSION}"

                script {
                    app = docker.build("mnsbutterfly/risc")
                }

            }

        }

       stage("test") {

            steps {

                script {
                    app.inside {
                        echo 'testing the risc client...passed!'
                    }
                }
                
            }

        }

       stage("push") {

            steps {
                echo 'archiving the risc client image...'

                script {
                    docker.withRegistry('https://registry.hub.docker.com','docker-hub') {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest");
                    }
                }
                
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