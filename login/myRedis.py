import redis
from models import DjangoUser
myRedisClient = redis.StrictRedis(host='localhost',port=6379,db=0)
myRedisClient.set('userNumber',DjangoUser.objects.all().__len__())