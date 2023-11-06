import React from 'react'
import Carousel from 'better-react-carousel'
// import Carousel from 'better-react-carousel'
export const Gallery = () => {
  return (
    <div className='carousel' style={{
        padding:'0',
        margin:'0',
    }}> 
        {/* <h1>Gallery Componant</h1> */}
        <Carousel loop cols={1} rows={1} autoplay={2000}>
            <Carousel.Item>
                <img src="https://picsum.photos/1220/400?random=1" height={'75%'} width={'100%'}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://picsum.photos/1220/400?random=2" height={'75%'} width={'100%'}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://picsum.photos/1220/400?random=3" height={'75%'} width={'100%'}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://picsum.photos/1220/400?random=4" height={'75%'} width={'100%'}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://picsum.photos/1220/400?random=5" height={'75%'} width={'100%'}/>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
