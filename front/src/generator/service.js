function getData() {
        return [
            {
                'data': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt purus eget consectetur ullamcorper. Cras feugiat, nunc nec pulvinar rutrum, sapien risus venenatis sem, ac porttitor nisi quam id libero. Nam ligula elit, faucibus id venenatis nec, pharetra eu massa. Donec sollicitudin ligula sed molestie scelerisque. Phasellus tincidunt, risus at rutrum auctor, purus libero tincidunt odio, sit amet sodales justo felis et erat. '
            },
            {
                'data': 'Sed commodo suscipit dictum. Nullam euismod mauris vel nisi ultrices tempus. Nullam eget lacus aliquet, bibendum turpis in, consectetur ligula.'
            },
            {
                'data': 'Praesent tempus odio in lectus consectetur egestas. Nam vel lacus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                'data': 'Vivamus vitae leo a est dictum finibus a vel massa. Pellentesque a felis nisi. Maecenas tristique rutrum commodo. Integer a ultricies risus, at consectetur arcu. Sed blandit orci quis velit eleifend, vitae congue leo imperdiet.'
            },
            {
                'data': 'Donec id faucibus ex. Mauris volutpat ante in tortor rutrum commodo. '
            },
            {
                'data': 'quis ornare mauris pulvinar. Vivamus a commodo velit. Curabitur'
            }
        ];
}

export function* getNextPost() {
    let index = 0;
    const postNames = getData().reverse();
    while (index < postNames.length - 1) {
        yield postNames[index];
        index++;
    }
    return postNames[index];
}