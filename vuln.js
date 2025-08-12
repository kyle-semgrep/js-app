module.exports.redirect = function (req, res) {

	// ruleid: session-fixation
	res.setHeader("Set-Cookie",req.query.url)
	// ok: session-fixation
	res.setHeader("Set-Cookie",c)

	// ruleid: session-fixation
	res.setHeader("connect.sid",req.query.url)
	// ok: session-fixation
	res.setHeader("connect.sid",c)
	// ruleid: session-fixation
	res.setHeader('Cookie', [`language=${req.query.cookie}`]);
	// ok: session-fixation
	res.setHeader("Content-Type", req.query.cookie);
	// ruleid: session-fixation
  res.cookie('access_token', req.query.cookie, config);
}
