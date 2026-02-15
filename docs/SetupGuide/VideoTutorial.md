<iframe width="560" height="315" src="https://www.youtube.com/embed/j83L9HngxY4?si=DwwneWyv-CrP0iSf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<button class="md-button md-button--primary"
        onclick="copySalsaLink(this)">
  Click Me To Copy SalsaNOW Link
</button>

<script>
function copySalsaLink(btn) {
    const text = "https://salsanowfiles.work/SalsaNOW/SalsaNOWUpdater.exe";
    navigator.clipboard.writeText(text);
    btn.innerText = "Copied!";
    setTimeout(() => btn.innerText = "Click Me To Copy SalsaNOW Link", 2000);
}
</script>

<button class="md-button md-button--primary"
        onclick="copyGamePath(this)">
  Click Me To Copy Game Path
</button>

<script>
function copyGamePath(btn) {
    const text = "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Cat Quest Demo\\Cat Quest.exe";
    navigator.clipboard.writeText(text);
    btn.innerText = "Copied!";
    setTimeout(() => btn.innerText = "Click Me To Copy Game Path", 2000);
}
</script>