// Simple test function for local development
export async function testEmail() {
    try {
        const response = await fetch('/api/test-email', {
            method: 'GET',
        });

        const result = await response.json();
        console.log('Email test result:', result);
        return result;
    } catch (error) {
        console.error('Error testing email:', error);
        return { error: 'Failed to test email' };
    }
}

export async function submitWaitlist(email: string, name?: string) {
    try {
        const response = await fetch('/api/waitlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name }),
        });

        const result = await response.json();
        console.log('Waitlist submission result:', result);
        return result;
    } catch (error) {
        console.error('Error submitting to waitlist:', error);
        return { error: 'Failed to submit to waitlist' };
    }
}

