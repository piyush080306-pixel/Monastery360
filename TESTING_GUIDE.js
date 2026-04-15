#!/usr/bin/env node

/**
 * Social Login Testing Guide
 * 
 * This file provides quick ways to test the social login implementation
 * Open this in a text editor and use the commands in browser console
 */

// =============================================================================
// CONSOLE TESTING COMMANDS
// =============================================================================
// 
// Copy and paste these commands in your browser's DevTools console (F12)
// to test various aspects of the social login system
//

// ============================================================
// 1. CHECK IF SDKS ARE LOADED
// ============================================================

// Check if Google SDK loaded
console.log('Google SDK loaded:', typeof google !== 'undefined');

// Check if Facebook SDK loaded
console.log('Facebook SDK loaded:', typeof FB !== 'undefined');

// ============================================================
// 2. CHECK CURRENT USER
// ============================================================

// Get current logged-in user
const currentUserData = JSON.parse(localStorage.getItem('currentUser'));
console.log('Current User:', currentUserData);

// Get all users registered
const allUsers = JSON.parse(localStorage.getItem('users')) || [];
console.log('All Users:', allUsers);

// ============================================================
// 3. CREATE TEST USER (Email/Password)
// ============================================================

// This creates a test user you can login with
function createTestUser() {
    const testUser = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        bookings: [],
        favorites: [],
        createdAt: new Date().toISOString()
    };
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(testUser);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('✅ Test user created:', testUser);
    console.log('📝 Login with: test@example.com / password123');
}

// Run this to create test user:
// createTestUser();

// ============================================================
// 4. TEST LOGIN SIMULATION
// ============================================================

// Simulate logging in with Google
function simulateGoogleLogin() {
    const simulatedGoogleUser = {
        name: 'Google Test User',
        email: 'googletest@example.com',
        picture: 'https://via.placeholder.com/150',
        provider: 'google',
        sub: 'google_123456789'
    };
    
    console.log('🔵 Simulating Google login with:', simulatedGoogleUser);
    console.log('Calling: handleSocialAuthSuccess(simulatedGoogleUser)');
    
    // This would be: handleSocialAuthSuccess(simulatedGoogleUser);
}

// Simulate logging in with Facebook
function simulateFacebookLogin() {
    const simulatedFacebookUser = {
        name: 'Facebook Test User',
        email: 'fbtest@example.com',
        picture: 'https://via.placeholder.com/150',
        provider: 'facebook',
        id: 'facebook_987654321'
    };
    
    console.log('🔵 Simulating Facebook login with:', simulatedFacebookUser);
    console.log('Calling: handleSocialAuthSuccess(simulatedFacebookUser)');
    
    // This would be: handleSocialAuthSuccess(simulatedFacebookUser);
}

// ============================================================
// 5. CLEAR ALL DATA
// ============================================================

// Clear all stored data (logout all users, delete all records)
function clearAllData() {
    if (confirm('⚠️ This will delete ALL stored data. Continue?')) {
        localStorage.clear();
        console.log('✅ All data cleared');
        location.reload();
    }
}

// ============================================================
// 6. LOGOUT CURRENT USER
// ============================================================

// Logout current user
function logoutCurrentUser() {
    localStorage.removeItem('currentUser');
    console.log('✅ Current user logged out');
    location.reload();
}

// ============================================================
// 7. CHECK CONFIGURATION STATUS
// ============================================================

function checkConfiguration() {
    console.log('\n🔍 CONFIGURATION STATUS:\n');
    
    // Check Google
    if (typeof google !== 'undefined') {
        console.log('✅ Google SDK: LOADED');
    } else {
        console.log('❌ Google SDK: NOT LOADED');
    }
    
    // Check Facebook
    if (typeof FB !== 'undefined') {
        console.log('✅ Facebook SDK: LOADED');
    } else {
        console.log('❌ Facebook SDK: NOT LOADED');
    }
    
    // Check localStorage
    console.log('✅ localStorage: ' + (typeof Storage !== 'undefined' ? 'AVAILABLE' : 'NOT AVAILABLE'));
    
    // Check users in storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(`\n📊 Stored Data:`);
    console.log(`   Users: ${users.length}`);
    console.log(`   Currently Logged In: ${localStorage.getItem('currentUser') !== null ? 'Yes' : 'No'}`);
    
    console.log('\n👤 USERS:');
    users.forEach((user, i) => {
        console.log(`   ${i + 1}. ${user.name} (${user.email}) - Provider: ${user.provider || 'email'}`);
    });
}

// ============================================================
// 8. QUICK TEST FLOW
// ============================================================

function quickTest() {
    console.log('\n🧪 QUICK TEST FLOW:\n');
    
    // Step 1: Check SDKs
    console.log('Step 1: Checking SDKs...');
    console.log('  Google:', typeof google !== 'undefined' ? '✅' : '❌');
    console.log('  Facebook:', typeof FB !== 'undefined' ? '✅' : '❌');
    
    // Step 2: Check storage
    console.log('\nStep 2: Checking storage...');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('  Users stored:', users.length, '✅');
    
    // Step 3: Create test user
    console.log('\nStep 3: Creating test user...');
    createTestUser();
    
    // Step 4: Instructions
    console.log('\n✅ Ready to test!');
    console.log('Next: Click Account → Login/SignUp');
    console.log('      Try: test@example.com / password123');
}

// ============================================================
// 9. HELPFUL UTILITIES
// ============================================================

// Pretty print user object
function printUser(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email);
    if (user) {
        console.table(user);
    } else {
        console.log('User not found:', email);
    }
}

// Export user data as JSON
function exportUserData() {
    const data = {
        users: JSON.parse(localStorage.getItem('users')) || [],
        currentUser: JSON.parse(localStorage.getItem('currentUser')) || null
    };
    console.log('📤 User data:');
    console.log(JSON.stringify(data, null, 2));
}

// ============================================================
// QUICK START COMMANDS
// ============================================================
/*

RUN THESE COMMANDS IN BROWSER CONSOLE:

1. Check Configuration:
   checkConfiguration()

2. Setup Test User:
   createTestUser()

3. Quick Test:
   quickTest()

4. View User Data:
   console.log(JSON.parse(localStorage.getItem('users')))

5. Export All Data:
   exportUserData()

6. Logout:
   logoutCurrentUser()

7. Clear Everything:
   clearAllData()

8. Print Specific User:
   printUser('test@example.com')

*/

// =============================================================================
// IF RUNNING THIS IN NODE.JS OR AS A SCRIPT
// =============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createTestUser,
        simulateGoogleLogin,
        simulateFacebookLogin,
        clearAllData,
        checkConfiguration,
        quickTest,
        printUser,
        exportUserData
    };
}

// =============================================================================
// END OF TESTING GUIDE
// =============================================================================

console.log(`
╔══════════════════════════════════════════════════════════════╗
║          SOCIAL LOGIN TESTING UTILITY v1.0                   ║
╚══════════════════════════════════════════════════════════════╝

📖 Available commands (paste in browser console):

  🔍 checkConfiguration()     - Check if everything is set up
  👤 createTestUser()         - Create test account
  🧪 quickTest()              - Run quick test flow
  👤 printUser('email')       - View specific user
  📤 exportUserData()         - Export all data as JSON
  🚪 logoutCurrentUser()      - Logout current user
  🗑️  clearAllData()          - Clear ALL data

📝 Test Credentials:
  Email: test@example.com
  Password: password123

🔗 Setup Guides:
  - SOCIAL_LOGIN_SETUP.md
  - Google_Facebook_LOGIN_QUICK_START.md
  - IMPLEMENTATION_SUMMARY.md

🚀 Next Steps:
  1. Run: checkConfiguration()
  2. Run: createTestUser()
  3. Click Account → Login/SignUp
  4. Try login with test credentials

✅ Ready to test social login!
`);

