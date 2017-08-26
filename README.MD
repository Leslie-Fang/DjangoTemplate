一个基于Django的网站框架，主要包含了一些自己的使用习惯

Done list:
* Signup
* Login
* Use redis to save and count users' number in the MySQL
* Add session in Redis
* Add logout: destory the session id
* password salt then save
* in the form add onfoucs to clear value
* Use session to control login status and html(view user could visit ) login control

Todo List:

* Add a front frame, choose reactjs


# production:

command:
python manage.py runserver 0.0.0.0:4000

code:
* setting.py:
add: ALLOWED_HOSTS = ['150.95.148.104', 'localhost', '127.0.0.1']


# reactjs的集成

计划：
在根目录下建一个reactjs的目录去包含reactjs+redux的代码
然后用babel和webpack打包到各个对应的APP的static的js文件夹下面，用gulp去监听和打包
最后各个APP的页面中都去包括各自的js文件