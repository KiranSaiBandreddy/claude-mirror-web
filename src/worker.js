
export default {
  async fetch(request, env) {
    // Create a URL object from the request URL
    const url = new URL(request.url);
    
    // If the pathname is just "/" or empty, serve index.html
    if (url.pathname === "/" || url.pathname === "") {
      const response = await env.ASSETS.fetch(new Request("https://aiondemand.in/index.html", request));
      return response;
    }
    
    // Try to serve the requested asset directly
    try {
      const asset = await env.ASSETS.fetch(request);
      return asset;
    } catch (e) {
      // If the asset doesn't exist, serve index.html for client-side routing
      return await env.ASSETS.fetch(new Request("https://aiondemand.in/index.html", request));
    }
  }
};
