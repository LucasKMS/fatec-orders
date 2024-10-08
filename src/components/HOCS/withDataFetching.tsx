import { Alert, AlertTitle, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export const withDataFetching = (url: string) => (WrappedComponent: any) => {
    return function withDataFetching(props: any) {
        const [data, setData] = useState();
        const [error, setError] = useState<string>();
        const [isLoading, setIsLoading] = useState<boolean>(true)
        


        // useEffect(() => {
        //     if(error) {
        //       alert(error);
        //     }
        //   }, [error])

        useEffect(() => {
            const fetchData = async () => {
                const id = props.params?.slug ? `/${props.params?.slug}` : "";

                try{
                    const response = await axios.get(`${url}${id}`);
                    setData(response.data)
                } catch(_error){
                    setError("Erro ao tentar realizar a Consulta!");
                } finally{
                    setIsLoading(false);
                }



            };
            fetchData();
        }, [props.params?.slug]);

        return <>

        {isLoading ? <CircularProgress sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}/> : undefined}

        {error ? (<Alert severity="error" sx={{
            position: "absolute",
            top: "100px"
        }}>
            <AlertTitle>Erro</AlertTitle>
            {error}
        </Alert>) : undefined}

        <WrappedComponent {...props} data={data} />
        </>
    };
}







