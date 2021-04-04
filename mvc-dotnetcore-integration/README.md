# How to integrate React to an already created ASP.NET Core MVC project

## First of all
- Install Node. Go to https://nodejs.org and download Node.js (`npm` will be installed automatically).
- Install `npx` globally. Run the following command: `npm install -g npx`.

## Create React App
- Open the terminal
- **IMPORTANT**: Make sure your inside your project directory and not your solution directory
- Run this command `npx create-react-app your-app-name`
- This will install the React app inside the .NET Core MVC project

## Start Integrating
Four Steps:

### Install NuGet Package 
Install a NuGet Package called `Microsoft.AspNetCore.SpaServices.Extensions` (make sure it's version 3.1.x and not version 5)

### Remove `=Home` from `UseEndpoints`
Go to `Startup.cs` and in `app.UseEndpoints`, in the `pattern` remove `=Home`. So intead of having this: 
```cs 
 app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}"); // here
    });
```
You'll have this: 
```cs 
 app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllerRoute(
            name: "default",
            pattern: "{controller}/{action=Index}/{id?}"); // here
    });
```

### Add `UseSpa`
In `Startup.cs` and add the following code to the `Configure` method:
```cs
app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp"; // change this to your react app's name
        if (env.IsDevelopment())
    {
        spa.UseReactDevelopmentServer(npmScript: "start");
    }
});

```
 
### Setup app for production 
Add the following code to `ConfigureServices` method in `Startup.cs`
```cs
// In production, the React files will be served from this directory
services.AddSpaStaticFiles(configuration =>
    {
        configuration.RootPath = "ClientApp/build"; // change this to your react app's name
    });
```

And then add `app.UseSpaStaticFiles();` to the `Configure` method.

## Refs
- Linux/Mac cmds to Powershell -> https://mathieubuisson.github.io/powershell-linux-bash/