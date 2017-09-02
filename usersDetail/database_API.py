from .models import HistoryData

def getHistoryData():
    allData = HistoryData.objects.all()
    data = []
    for item in allData:
        #format the date to this format:  Thu Aug 31 2017 20:04:03
        #dataRecord = line['date'].strip().split('.')[0].strip()
        data.append({'date':item.date,'tradePair':item.name,'price':item.price})
        #data[dataCount] = {'date': line['date'],'price': line['price']}
    print data
    return data
