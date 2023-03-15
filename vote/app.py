import streamlit as st
import redis


# Initialize poll options with zero votes
poll_options = {
    'Docker Swarm': 0,
    'Kubernetes': 0,
    'Mesos': 0,
    'Nomad': 0
}

# Initialize Redis connection
r = redis.Redis(host='redis', port=6379, db=0)

# Define the poll form using Streamlit components
def poll_form():
    with st.form(key='poll_form'):
        st.write('Which container orchestration tool do you prefer?')
        option = st.radio('Select an option:', list(poll_options.keys()))
        submit_button = st.form_submit_button(label='Submit')
        r.hincrby('poll_results', option, 0)
        if submit_button:
            st.write('Thank you for your contribution in this poll !')
            poll_options[option] += 1
            # Update Redis hash with poll count
            r.hincrby('poll_results', option, 1)

# Define the poll results using Streamlit components
def poll_results():
    st.write('Poll results:')
    # Retrieve poll counts from Redis hash
    poll_counts = r.hgetall('poll_results')
    for option, count in poll_counts.items():
        option = option.decode('utf-8')
        count = int(count)
        st.write(f'{option}: {count}')

# Define the Streamlit app
def main():
    st.set_page_config(page_title='Best Container Orchestration Tool ?')
    st.title('Select Your favourite Container Orchestration Tool')
    poll_form()

if __name__ == '__main__':
    main()
