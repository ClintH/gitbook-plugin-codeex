# Code examples

Show code examples in Gitbook. Two markup tags are provided.

## codeEx

```
{% codeEx "Example tag" language="css" %}
body {
  background-color: blue;
}
{% endcodeEx %}
```

This will wrap the code sample like so:

```
<div class="example">
  Example tag
  <code class="language-css">
    body { 
      background-color: blue;
    }
  </code>
</div>
```

## markupEx

Shows the code and preview for a fragment of HTML markup.

```
{% markupEx "Example tag"  %}
<p>A <strong>bold</strong> word.
{% endmarkupEx %}
```

Produces:

```
<div class="example markup">
  Example tag
  <div>
    <pre><code style="language-markup">
      &lt;p&gt;A &lt;strong&gt;bold&lt;/strong&gt; word.
    </code></pre>
    <div>
      <p>A <strong>bold</strong> word.
    </div>
  </div>
</div>
```
