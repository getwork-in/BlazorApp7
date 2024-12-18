﻿namespace BlazorApp7.Domain.Entities.InSession;

public class Match
{
	public Guid SessionId { get; set; }
	public Guid Id { get; set; }
	public Guid HomeTeamId { get; set; }
	public Guid AwayTeamId { get; set; }
	public DateTime Date { get; set; }
	public int? HomeTeamScore { get; set; }
	public int? AwayTeamScore { get; set; }
	public ICollection<Statistic>? Statistics { get; set; }
}