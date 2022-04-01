import { clientSideSamplePageRoute, ssrSamplePageRoute } from "./APIRoutes"
import AxiosClient from "./AxiosClient"
import AxiosServer from "./AxiosServer"

//SSR APIs
export const ssrSamplePageAPI = {
    todo: async (id) => AxiosServer.get(ssrSamplePageRoute.todo(id)),
    list: async () => AxiosServer.get(ssrSamplePageRoute.list)
}

//client APIs
export const clientSidePageAPI = {
    todo: async (id) => AxiosClient.get(clientSideSamplePageRoute.todo(id)),
    list: async () => AxiosClient.get(clientSideSamplePageRoute.list)
}
