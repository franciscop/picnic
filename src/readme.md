# Picnic CSS

Picnic CSS is a lightweight and beautiful CSS library

<script>
  // Create the visuals for the docs page
  document.querySelectorAll('pre .language-html').forEach(function(node){
  const pre = node.parentNode;
  const html = `<html><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/picnic"></head><body>${node.textContent}</body></html>`;
  // The <div> is needed because otherwise, `.before()` removes whitespaces
  const frame = document.createElement('iframe');
  frame.style.border = '1px solid #eee';
  frame.style.padding = '10px';
  frame.style.width = '100%';
  pre.parentNode.insertBefore(frame, pre);
  frame.contentWindow.document.open();
  frame.contentWindow.document.write(html);
  frame.contentWindow.document.close();
});
</script>
