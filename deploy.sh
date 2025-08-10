#!/bin/bash

# Deployment script for An Luong's website
# This script helps manage the workflow between development and production

set -e

echo "🚀 An Luong Website Deployment Script"
echo "====================================="

# Function to show usage
show_usage() {
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  dev       - Start development server"
    echo "  build     - Build for production"
    echo "  preview   - Preview production build"
    echo "  deploy    - Deploy to production (merge to master)"
    echo "  status    - Show current git status"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 dev        # Start development server"
    echo "  $0 build      # Build production files"
    echo "  $0 deploy     # Deploy to production"
}

# Function to start development server
start_dev() {
    echo "🔄 Starting development server..."
    echo "📱 Server will be available at: http://localhost:3000"
    echo "🛑 Press Ctrl+C to stop the server"
    echo ""
    npm run dev
}

# Function to build for production
build_production() {
    echo "🔨 Building for production..."
    npm run build
    echo "✅ Build complete! Files are in the 'dist' directory"
}

# Function to preview production build
preview_production() {
    echo "👀 Previewing production build..."
    npm run preview
}

# Function to deploy to production
deploy_production() {
    echo "🚀 Deploying to production..."
    
    # Check if we're on development branch
    current_branch=$(git branch --show-current)
    if [ "$current_branch" != "development" ]; then
        echo "❌ Error: You must be on the 'development' branch to deploy"
        echo "   Current branch: $current_branch"
        echo "   Please run: git checkout development"
        exit 1
    fi
    
    # Check if there are uncommitted changes
    if [ -n "$(git status --porcelain)" ]; then
        echo "❌ Error: You have uncommitted changes"
        echo "   Please commit or stash your changes before deploying"
        git status --short
        exit 1
    fi
    
    # Build the project
    echo "🔨 Building project..."
    npm run build
    
    # Switch to master branch
    echo "🔄 Switching to master branch..."
    git checkout master
    
    # Merge development into master
    echo "🔀 Merging development into master..."
    git merge development
    
    # Push to origin
    echo "📤 Pushing to origin..."
    git push origin master
    
    # Switch back to development
    echo "🔄 Switching back to development branch..."
    git checkout development
    
    echo "✅ Deployment complete!"
    echo "🌐 Your website should be updated at: https://anvluong.github.io"
}

# Function to show git status
show_status() {
    echo "📊 Current Git Status:"
    echo "======================"
    echo "Current branch: $(git branch --show-current)"
    echo "Remote tracking: $(git branch -vv | grep '*' | awk '{print $4}')"
    echo ""
    echo "Recent commits:"
    git log --oneline -5
    echo ""
    echo "Working directory status:"
    git status --short
}

# Main script logic
case "${1:-help}" in
    "dev")
        start_dev
        ;;
    "build")
        build_production
        ;;
    "preview")
        preview_production
        ;;
    "deploy")
        deploy_production
        ;;
    "status")
        show_status
        ;;
    "help"|"--help"|"-h")
        show_usage
        ;;
    *)
        echo "❌ Unknown command: $1"
        echo ""
        show_usage
        exit 1
        ;;
esac
