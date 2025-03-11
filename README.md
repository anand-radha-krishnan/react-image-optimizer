A lightweight package that automatically optimizes images based on the user's device and viewport.

# Usage

```
<OptimizedImage
    alt="Example Image"
    width={1200}
    height={800}
    srcSet="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg 320w,
            https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg 480w,
            https://images.dog.ceo/breeds/hound-afghan/n02088094_10715.jpg 800w,
            https://images.dog.ceo/breeds/hound-afghan/n02088094_10822.jpg 1200w"
    sizes="(max-width: 600px) 320px, (max-width: 1024px) 480px, 800px"
    fallbackSrc="https://images.dog.ceo/breeds/hound-afghan/n02088094_1145.jpg"
/>
```

# Props

| Name        | Usage                                                  |
| ----------- | ------------------------------------------------------ |
| src | Image Url |
| alt | Alternate text |
| width | Number
| height | Number
| srcSet | String of Images to be displayed for different view ports |
| sizes | Size configurations |
| fallbackSrc | Fallback Image Url |

------------------------------------------------------
