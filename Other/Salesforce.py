# pip install simple_salesforce

# API_DISABLED_FOR_ORG - We need to upgrade to use this code...

from simple_salesforce import Salesforce
import pandas as pd

# Temporary Access: Free Trial
# Account Created: June 24th
# Days left in trial (13) as of June 26th
sf = Salesforce(
username='james-7d3l@force.com', 
password='ThrowAway007@', 
security_token='oADyOIWYVAxowKkKO1fk9yFt')

# Read_ME
# https://github.com/simple-salesforce/simple-salesforce
# https://pypi.org/project/simple-salesforce/0.3/

# Example
sf_data = sf.query_all("SELECT Owner.Name, store_id__c, account_number__c, username__c, password__c, program_status__c, FROM Account WHERE program_status__c IN ('Live','Test')")

# Visualize
sf_df = pd.DataFrame(sf_data['records']).drop(columns='attributes')
print(sf_df)