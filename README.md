
## better-lists

This source code has been used in presentation "Make Lists Great Again - SharePoint Field Customizer" which was performed by Mateusz Chodkowski at Microsoft 365 User Group Poland Meetup #2. 
You can easily find our group [on Facebook](https://www.facebook.com/groups/m365ugpl/) or by hashtag #M365UGPL.

[Here you can find slides from this presentation.](https://1drv.ms/p/s!Amrn9fUpxmp2godnWoYLD3J5sBxJ-Q)

### Configuring solution
In ```/config/serve.json``` set ```pageUrl``` parameter as main view of your list.
Below that, you can set ```fieldCustomizers``` property with field names that should be customized.
Remember that space symbol in field names is encoded as ```_x0020_```.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp serve
```
