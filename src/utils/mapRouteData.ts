export const mapRouteData = (routeData: any, isFull: boolean) => {
    if (isFull) return routeData;
    return {
        tripDuration: routeData.routes[0].duration
    };
}