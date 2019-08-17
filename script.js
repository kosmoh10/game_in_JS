


var arr=[];

for(var i=0;i<8;i++)
{
	arr[i]=i*2;
}

function pow(x,y)
{
	if(y===0)
	{
		return 1;
	}

	return x*pow(x,y-1);
}

for(var i=0;i<8;i++)
{
	console.log(pow(2,arr[i]));	
}
i=0;

do
{
	if(arr[i]>0)
	{
		console.log("yes");
	}
	else
	{
		console.log("no");
	}
	i++;
}while(i<10)

