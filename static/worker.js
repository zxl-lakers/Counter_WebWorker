var i=0;

function timedCount()
{
i=i+1;
var workerTimeout = setTimeout("timedCount()",500);
// Worker 线程向主线程发送消息
postMessage({
    num: i,
    workerTimeout: workerTimeout
});
}

timedCount();