<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
    <channel>
        <title>$Title</title>
        <link>$Link</link>
        <atom:link href="$Link" rel="self" type="application/rss+xml" />
        <description>$Description.XML</description>
        <lastBuildDate>$LastModified</lastBuildDate>
        <%--<category domain="www.dmoz.com">Computers/Software/Internet/Site Management/Content Management</category>--%>
        <%--<copyright>Copyright 2004 NotePage, Inc.</copyright>--%>
        <language>en-nz</language>
        <%--<generator>FeedForAll Beta1 (0.0.1.8)</generator>--%>
        <% loop $Entries %>
            <item>
                <title>$Title.XML</title>
                <link>$AbsoluteLink</link>
				<description>$DisplaySummary.XML</description>
				<pubDate>$Created.Rfc822</pubDate>
                <guid>$AbsoluteLink</guid>
            </item>
		<% end_loop %>
    </channel>
</rss>
