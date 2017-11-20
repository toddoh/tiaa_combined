from crontab import CronTab

cron = CronTab()

print('Printing all cron tasks: ')
for job in cron:
    print(job)


print('Adding a new cron tasks: ')
job = cron.new(command='cd /var/www/kevin/kevin/ && /var/envs/kevin/bin/python action_aggregation.py --target=trumptimemachine',
               comment='minion_trumptimemachine_aggregator')
job.minute().on(0)
job.hour().on(6)

job.enable()
cron.write()
print('Finished crontab configuration with success.')