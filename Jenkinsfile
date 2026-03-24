pipeline {
    agent any

    tools {
        nodejs 'Node 20' // Ensure this matches your Tool name in Jenkins
    }

    stages {
        stage('Environment Setup') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
                // Standard Practice: Install browsers in the CI environment
                bat 'npx playwright install --with-deps chromium'
            }
        }

        stage('Run Smoke Tests') {
            steps {
                echo 'Executing Playwright Tests...'
                // 'headless' mode is standard for CI (no browser window pops up)
                bat 'npx playwright test --project=chromium'
            }
        }
    }

    post {
        always {
            // This is "Artifact Management" - keeping the evidence
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkName: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
    }
}