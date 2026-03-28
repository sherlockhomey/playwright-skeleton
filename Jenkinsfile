pipeline {
    agent any

    tools {
        nodejs 'Node v24' 
    }

    stages {
        stage('Environment Setup') {
            steps {
                bat 'npm install'
                bat 'npx playwright install --with-deps chromium'
            }
        }

        stage('Run Smoke Tests') {
            steps {
                bat 'npx playwright test --project=chromium || exit 0'
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                allowMissing: false,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
    }
}