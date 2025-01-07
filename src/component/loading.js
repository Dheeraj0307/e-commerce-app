
export const render = () => {

    const loadings = document.querySelectorAll('.loading');

    const loadingImages = document.querySelectorAll('.loading-img')


    for (let loading of loadings) {
        loading.classList.remove('loading')
    }

    for (let image of loadingImages) {
        image.style.visibility = 'visible'
    }

    console.log('js')

}

