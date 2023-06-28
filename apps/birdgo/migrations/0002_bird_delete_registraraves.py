# Generated by Django 4.2.2 on 2023-06-28 03:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('birdgo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bird',
            fields=[
                ('id_ave', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre_ave', models.CharField(max_length=20)),
                ('nombre_cientifico', models.CharField(max_length=30, null=True)),
                ('imagen_ave', models.ImageField(upload_to='imagenesAves')),
            ],
            options={
                'db_table': 'registrarAves',
            },
        ),
        migrations.DeleteModel(
            name='registrarAves',
        ),
    ]
