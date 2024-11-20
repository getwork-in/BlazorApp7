﻿using Microsoft.AspNetCore.Components;

namespace BlazorApp7.Components.Tailwind;

public partial class NavList : UiComponentBase
{
	[Parameter] public string? Title { get; set; }
	[Parameter] public RenderFragment? ChildContent { get; set; }

	readonly List<NavListItem> items = [];

	internal void AddItem(NavListItem item)
	{
		items.Add(item);
	}
}
