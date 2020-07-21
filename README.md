<a href='https://www.vuemastery.com/courses/next-level-vue/next-level-vue-orientation/'><h1>Vue Mastery Example Event App</h1></a>

<h2>What have I learned?</h2>
<ol>
    <li>
    <h3><b>Axios Interceptors</b></h3>
    <p>Act the similar way to middleware concept, you can call some function before axios request and axios response handler, but here is the cons - if you are making a batch of API calls - every of them will trigger NProgress start and end methods. Which is not good as you can understand.</p>
    </li>
    <li>
    <h3><b>JSON Server delay flag</b></h3>
    <p>You can use json-server delay flag to imitate slow internet connection speed.</p>
    </li>
    <li>
    <h3><b>Router Navigation Guard</b></h3>
    <p>
        VueRouter add more cycle hooks to your components:
        <ul>
            <li>beforeRouteEnter() - you <b>CANT</b> access <b>this</b> inside this hook</li>
            <li>beforeRouteUpdate() - you <b>CAN</b> access <b>this</b> inside this hook</li>
            <li>beforeRouteLeave() - you <b>CAN</b> access <b>this</b> inside this hook</li>
        </ul>
        All of this hooks <b>MUST</b> call <b>next()</b> function inside them
    </p>
    </li>
</ol>

