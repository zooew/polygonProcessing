$("#clip").click(function(){

});

function  isClockwise(ring) {
	var p1 = {}, p2 = {}, p3 = {};
	var p1_index;
	var max_y = 0;
	for(var i = 0; i < ring.length-1; i++)
    {
        if(ring[i].y > max_y)
        {
            max_y = ring[i].y;
            p1_index = i;
        }
    }
    p1.x = ring[p1_index].x;
    p1.y = ring[p1_index].y;

    if(p1_index == 0)
    {
    	p2.x = ring[ring.length - 2].x;
    	p2.y = ring[ring.length - 2].y;
    }
    else
    {
    	p2.x = ring[p1_index - 1].x;
    	p2.y = ring[p1_index - 1].y;
    }

    p3.x = ring[p1_index+1].x;
    p3.y = ring[p1_index+1].y;

    var v1 = {};
    var v2 = {}

    
}