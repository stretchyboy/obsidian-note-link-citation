# Note Links Citations Plugin

This is a Note Link Citation Plugin for Obsidian (https://obsidian.md).

It converts all obsidian internal note links `[[Note Name]]` into an in text citation (currently only Harvard style). 

It lifts metadata about authors etc from the front matter of the linked pages. Eventually this will be customizable but currently it uses the source and other fields used when creating pages with "Obsidian Web Clipper" & "Book Search". This allows for 6th Form students (16 -18 years old) to use Obsidian for very simple literature management without having to install new programs on school computers. 

It converts all internal links to 'Book Search' or 'Web Clipper' pages into a internal note links with a display text of Harvard citations.

* If a has link to a 'Web Clip' of https://github.com/stretchyboy/obsidian-note-link-citation  which looks like `[[obsidian-note-link-citation]]`
* Right Click & * Click 'Note links to citations' (There is also a command for this)
* Will be converted to `[[obsidian-note-link-citation|('Obsidian Note Link Citation')]]` which looks like a Harvard link but still works and will not break if I convert it again.
* If citing a page in a book i.e. (R. T. Dean, 2018, p. 95) the page will be preserved



## Installation

### From within Obsidian

1.  Open Obsidian Settings (`Ctrl+,` or `Cmd+,`).
2.  Go to **Community plugins**.
3.  Click **Browse** to search community plugins.
4.  Search for "Note Links Citations".
5.  Click **Install**.
6.  After installation, go to the **Installed plugins** tab and enable the "Note Links Citations" plugin.

### Manual Installation

1.  Download the latest release from [Releases](https://github.com/stretchyboy/obsidian-note-link-citation/releases) page.
2.  Extract the downloaded ZIP file to your Obsidian vault's plugins folder: `<your_vault>/.obsidian/plugins/obsidian-note-link-citation`.
    *   **Note:** Make sure to create the `obsidian-note-link-citation` folder if it doesn't exist.
3.  In Obsidian, go to **Settings** -> **Community plugins** and enable the "Note Links Citations" plugin.

## Credits

This code was started from the Sample Plugin from https://github.com/obsidianmd/obsidian-sample-plugin
This code uses Obsidian Dataview for managing the literature data. https://github.com/blacksmithgu/obsidian-dataview 