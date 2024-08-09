# Generated by Django 5.0.7 on 2024-08-09 03:17

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appTest', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='usertocertificate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('certificate_name', models.TextField()),
                ('certificate_no', models.CharField(max_length=100)),
                ('issue_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('expire_date', models.DateTimeField()),
                ('certificate', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='certificate', to='appTest.testuser')),
            ],
        ),
        migrations.CreateModel(
            name='usertocourses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('college', models.TextField()),
                ('university', models.TextField()),
                ('create_time', models.DateTimeField(default=django.utils.timezone.now)),
                ('courses', models.ManyToManyField(related_name='course', to='appTest.testuser')),
            ],
        ),
        migrations.CreateModel(
            name='userTosocialNetwork',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('facebook', models.TextField()),
                ('twitter', models.TextField()),
                ('linkedin', models.TextField()),
                ('github', models.TextField()),
                ('create_time', models.DateTimeField(default=django.utils.timezone.now)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='client', to='appTest.testuser')),
            ],
        ),
    ]
