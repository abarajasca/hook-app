import { useEffect, useState } from 'react'

const localCache = {}

export const useFetch = ( url ) => {

    const [state,setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    const getFetch = async () => {

        console.log({cache: localCache});

        if ( localCache[url] ){
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }
  
        setIsLoading();
        await new Promise( resolve => setTimeout(resolve,500) );
            
        const response = await fetch( url );
        if (!response.ok){
            // console.log(response);
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            });
            return;
        }
        const data = await response.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        });

        localCache[url] = data;
        
    }

    const setIsLoading = () => setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
    });

    useEffect(() => {
      getFetch();
    }, [url])
    
    

 return   {
      data: state.data,
      isLoading: state.isLoading,
      hasError: state.hasError,
      error: state.error
    }
}
