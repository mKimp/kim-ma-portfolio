pipeline {
    agent any
    stages {
        stage("FIRST STAGE") {
            steps {
                echo "HELLO WORLD"
            }
        }
        stage("BRAND-123"){
            when {
                branch "fix-*"
            }
            steps {
                sh '''
                    cat README.md
                '''
            }
        }
    }
}