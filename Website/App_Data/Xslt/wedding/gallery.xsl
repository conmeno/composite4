<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:in="http://www.composite.net/ns/transformation/input/1.0" xmlns:lang="http://www.composite.net/ns/localization/1.0" xmlns:f="http://www.composite.net/ns/function/1.0" xmlns="http://www.w3.org/1999/xhtml" exclude-result-prefixes="xsl in lang f">
	 
	<xsl:variable name="folder" select="/in:inputs/in:param[@name='ImagesFolder']" />
	<xsl:variable name="images" select="/in:inputs/in:result[@name='GetIImageFileXml']/IImageFile" /> 
	<xsl:template match="/">
		<html>
			<head></head>
			<body>
				  
					<xsl:choose> 
						<xsl:when test="$folder !=''"> 
								<xsl:for-each select="$images"> 
									<img src="~/media({@Id})" data-thumb="~/media({@Id})?h=50&amp;w=70" alt="{@Title}"> 
									</img>
								</xsl:for-each>
						</xsl:when>
					 </xsl:choose> 
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>