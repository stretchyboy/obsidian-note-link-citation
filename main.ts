import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { getAPI } from "obsidian-dataview";

const dv = getAPI();

// Remember to rename these classes and interfaces!
/*
interface NoteLinkCitationPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: NoteLinkCitationPluginSettings = {
	mySetting: 'default'
}
*/

export default class NoteLinkCitationPlugin extends Plugin {
	//settings: NoteLinkCitationPluginSettings;

	/**
	 * 
	 * */
	public getCitationLink(linkText: string): string {
		const oLink = dv.parse(linkText)
		//console.log("oLink", oLink)
		
		const oPage = dv.page(oLink.path)
		console.log("oPage", oPage)
		if(oPage){
			let newText = "[[" + oLink.path + "|("
			if (oPage.source){
				newText += "'" + oPage.title + "'"
				if (oPage.published){
					const oPublished = window.moment(oPage.published, 'L');
					newText += ", "+ oPublished.year()
				}
			} else {
				newText += oPage.authors
				if (oPage.publishDate){
					newText += ", "+ oPage.publishDate
				}
			}
				
			newText += ")]]" //dv.fileLink(oLink.path, false, oPage.title)
			return newText
		}
		return linkText;
	}

	async onload() {
		//await this.loadSettings();
		/*
		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: 'note-link-citation',
			name: 'Note link to Citation',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				if(editor.somethingSelected()){
					editor.replaceSelection(this.getCitationLink(editor.getSelection()));
				}
			}
		});
		*/
		this.addCommand({
			id: 'note-link-citations',
			name: 'Note links to Citations',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const documentText = editor.getValue();
				console.log("documentText", documentText)
				const rresult = documentText.match("\[\[.*\]\]");
				console.log("rresult", rresult)
				
				if(editor.somethingSelected()){
					editor.replaceSelection(this.getCitationLink(editor.getSelection()));
				}
			}
		});


		this.registerEvent(
			this.app.workspace.on("editor-menu", (menu, editor, view) => {
			  	menu.addItem((item) => {
					item
					.setTitle('Note link to Citations')
					.setIcon('document')
					.onClick(async () => {
						let documentText = editor.getValue();
						console.log("documentText", documentText)
						const rresult = documentText.match(/\[\[.*\]\]/gm);
						if(rresult){
							rresult.forEach((text) => {
								documentText = documentText.replace(text, this.getCitationLink(text))
							})
							editor.setValue(documentText)
						}
					});
				});
			})
		);

		// This adds a settings tab so the user can configure various aspects of the plugin
		//this.addSettingTab(new SampleSettingTab(this.app, this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		/*this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});*/

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		//this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {

	} 
	/*
	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}*/
}
/*

class SampleModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const {contentEl} = this;
		contentEl.setText('Woah!');
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}
class SampleSettingTab extends PluginSettingTab {
	plugin: NoteLinkCitationPlugin;

	constructor(app: App, plugin: NoteLinkCitationPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
*/
